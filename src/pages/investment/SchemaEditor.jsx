import React, { useEffect, useState } from "react";
import axios from "axios";
import { SCHEDULE_OPTIONS } from "../../constants/config";
import { LuPlus, LuTrash } from "react-icons/lu";


const SchemaEditor = () => {
    const [schemas, setSchemas] = useState([]);
    const [rankOptions, setRankOptions] = useState([]);
    const [fullRankList, setFullRankList] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchSchemas = axios.get("/api/v1/investment-schemas");
        const fetchRanks = axios.get("/api/v1/rankings");

        Promise.all([fetchSchemas, fetchRanks])
            .then(([schemaRes, rankRes]) => {
                setSchemas(schemaRes.data?.content || []);
                const ranks = rankRes.data?.content || [];
                setFullRankList(ranks); 
                const activeRanks = ranks.filter((r) => r.active);
                const formattedRanks = activeRanks.map((rank) => ({
                    label: rank.code,
                    value: rank.code
                }));
                setRankOptions(formattedRanks);
            })
            .catch((err) => {
                console.error("Error loading data", err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const handleChange = (index, field, value) => {
        const updated = [...schemas];
        const keys = field.split(".");
        if (keys.length === 2) {
            updated[index][keys[0]] = {
                ...updated[index][keys[0]],
                [keys[1]]: value
            };
        } else {
            updated[index][field] = value;
        }

        // If field is "rankId", auto-fill minimumInvestmentAmount from rankOptions
        if (field === "linkedRank") {
            console.log("SELECTED: ", value);
            const selectedRank = rankOptions.find((rank) => rank.value === value);
            if (selectedRank) {
            // You need access to full rank objects here
            const fullRank = fullRankList.find((r) => r.code === selectedRank.value);
            if (fullRank) {
                updated[index].minimumInvestmentAmount = fullRank.minInvestmentAmount;
            }
            }
        }


        setSchemas(updated);
    };

    const calculateTotalReturn = (schema) => {
        const min = parseFloat(schema.minimumInvestmentAmount || 0);
        const rate = parseFloat(schema.returnRate || 0);
        const periods = parseInt(schema.totalReturnPeriods || 0);
        return ((min * rate * periods) / 100).toFixed(2);
    };

    const handleAddRowBelow = (index) => {
        const prev = schemas[index];

        const newRow = {
            minimumInvestmentAmount: "",
            maximumInvestmentAmount: "",
            returnRate: "",
            totalReturnPeriods: "",
            returnSchedule: { id: 2 }, // default to 'Daily'
            linkedRank: prev?.linkedRank || "RANK_1", // ✅ Copy from current row
            active: true,
            isNew: true, // ✅ mark as new
        };

        const updated = [...schemas];
        updated.splice(index + 1, 0, newRow);
        setSchemas(updated);

        
        // Optional: remove highlight after 2 seconds
       // Remove highlight after 2 seconds
        // setTimeout(() => {
        //     setSchemas((prevSchemas) =>
        //     prevSchemas.map((s) => ({ ...s, isNew: false }))
        //     );
        // }, 2000);
    };

    const handleDeleteRow = async (schemaId) => {
        if (!schemaId) return;
        if (!window.confirm("Are you sure you want to delete this schema?")) return;
        try {
            await axios.delete(`/api/v1/investment-schemas/${schemaId}`);
            setSchemas(prev => prev.filter(s => s.id !== schemaId));
        } catch (err) {
            console.error("Delete failed", err);
            alert("Failed to delete schema.");
        }
    };

    if (loading) return <div>Loading investment schemas...</div>;

    return (
        <div className="container mt-4">
            <h4 className="mb-3">Investment Schema Editor</h4>
            <div className="table-responsive">
                <table className="table table-bordered table-striped table-sm align-middle">
                    <thead className="table-light">
                        <tr>
                            <th>Linked Rank</th>
                            {/* <th>Title</th> */}
                            <th>Min Invest</th>
                            <th>Invest Amount</th>
                            <th>Return Rate (%)</th>
                            <th>Duration (Days)</th>
                            <th>Schedule</th>
                            <th>Active</th>
                            <th>Est. Total Return</th>
                            <th style={{ width: "80px" }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {schemas.map((schema, index) => (
                            <tr 
                                key={schema.id}
                                className={schema.isNew ? "table-warning" : ""}
                                >
                                <td>
                                    <select
                                        className="form-select form-select-sm"
                                        value={schema.linkedRank || ""}
                                        onChange={(e) =>
                                            handleChange(index, "linkedRank", e.target.value)
                                        }
                                    >
                                        <option value="">Select</option>
                                        {rankOptions.map((opt) => (
                                            <option key={opt.value} value={opt.value}>
                                                {opt.label}
                                            </option>
                                        ))}
                                    </select>
                                </td>
                                {/* <td>{schema.title}</td> */}
                                <td>
                                    <input
                                        type="number"
                                        className="form-control form-control-sm"
                                        value={schema.minimumInvestmentAmount}
                                        onChange={(e) =>
                                            handleChange(index, "minimumInvestmentAmount", e.target.value)
                                        }
                                        disabled={true}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        className="form-control form-control-sm"
                                        value={schema.minimumInvestmentAmount || ""}
                                        onChange={(e) =>
                                            handleChange(index, "maximumInvestmentAmount", e.target.value)
                                        }
                                    />
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        className="form-control form-control-sm"
                                        value={schema.returnRate}
                                        onChange={(e) =>
                                            handleChange(index, "returnRate", e.target.value)
                                        }
                                    />
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        className="form-control form-control-sm"
                                        value={schema.totalReturnPeriods}
                                        onChange={(e) =>
                                            handleChange(index, "totalReturnPeriods", e.target.value)
                                        }
                                    />
                                </td>
                                <td>
                                    <select
                                        className="form-select form-select-sm"
                                        value={schema.returnSchedule?.id || ""}
                                        onChange={(e) =>
                                            handleChange(index, "returnSchedule.scheduleId", parseInt(e.target.value))
                                        }
                                    >
                                        <option value="">Select</option>
                                        {SCHEDULE_OPTIONS.map((opt) => (
                                            <option key={opt.value} value={opt.value}>
                                                {opt.label}
                                            </option>
                                        ))}
                                    </select>
                                </td>
                                <td className="text-center">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        checked={schema.active}
                                        onChange={(e) => handleChange(index, "active", e.target.checked)}
                                    />
                                </td>
                                <td>
                                    <span className="badge bg-success">
                                        ₹{calculateTotalReturn(schema)}
                                    </span>
                                </td>
                                <td className="text-center">
                                    <LuPlus
                                        size={18}
                                        color="green"
                                        style={{ cursor: "pointer", marginRight: 8 }}
                                        onClick={() => handleAddRowBelow(index)}
                                    />
                                    {schema.id && (
                                        <LuTrash
                                            size={18}
                                            color="red"
                                            style={{ cursor: "pointer" }}
                                            onClick={() => handleDeleteRow(schema.id)}
                                        />
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SchemaEditor;
