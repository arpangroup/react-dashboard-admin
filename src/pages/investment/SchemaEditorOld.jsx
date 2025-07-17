import React, { useEffect, useState } from "react";
import axios from "axios";
import { SCHEDULE_OPTIONS } from "../../constants/config";


const SchemaEditor = () => {
  const [schemas, setSchemas] = useState([]);
  const [rankOptions, setRankOptions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSchemas = axios.get("/api/v1/investment-schemas");
    const fetchRanks = axios.get("/api/v1/rankings");

    Promise.all([fetchSchemas, fetchRanks])
      .then(([schemaRes, rankRes]) => {
        setSchemas(schemaRes.data?.content || []);
        const ranks = rankRes.data?.content || [];
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
    setSchemas(updated);
  };

  const calculateTotalReturn = (schema) => {
    const min = parseFloat(schema.minimumInvestmentAmount || 0);
    const rate = parseFloat(schema.returnRate || 0);
    const periods = parseInt(schema.totalReturnPeriods || 0);
    return ((min * rate * periods) / 100).toFixed(2);
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
              <th>Max Invest</th>
              <th>Return Rate (%)</th>
              <th>Duration (Days)</th>
              <th>Schedule</th>
              <th>Active</th>
              <th>Est. Total Return</th>
            </tr>
          </thead>
          <tbody>
            {schemas.map((schema, index) => (
              <tr key={schema.id}>
                <td>
                  <select
                    className="form-select form-select-sm"
                    value={schema.linkedRank || ""}
                    onChange={(e) =>
                      handleChange(index, "rankId", parseInt(e.target.value))
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
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className="form-control form-control-sm"
                    value={schema.maximumInvestmentAmount || ""}
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SchemaEditor;
