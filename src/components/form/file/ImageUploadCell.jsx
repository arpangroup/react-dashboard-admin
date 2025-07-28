import React from "react";
import { LuTrash } from "react-icons/lu";
import PropTypes from "prop-types";
import "./ImageUploadCell.css"; // Style below

const ImageUploadCell = ({ 
  image, 
  onChange, 
  onDelete,  
  previewWidth = 80,
  previewHeight = 80 
}) => {
  return (
    <div className="text-center">
      {image?.preview ? (
        <div className="position-relative d-inline-block image-preview-wrapper">
          <img
            src={image.preview}
            alt="Preview"
            className="img-thumbnail shadow-sm"
            style={{
              width: `${previewWidth}px`,
              height: `${previewHeight}px`,
              objectFit: "cover",
              borderRadius: "4px"
            }}
          />
          <button
            type="button"
            className="btn btn-sm btn-danger position-absolute top-0 end-0 rounded-circle image-delete-btn"
            style={{ transform: "translate(50%, -50%)" }}
            onClick={onDelete}
            title="Remove image"
          >
            <LuTrash size={14} />
          </button>
        </div>
      ) : (
        <div className="custom-file-upload">
          <label className="btn btn-outline-primary btn-sm custom-upload-btn">
            Upload
            <input
              type="file"
              accept="image/*"
              onChange={(e) => onChange(e.target.files[0])}
            />
          </label>
        </div>
      )}
    </div>
  );
};

ImageUploadCell.propTypes = {
  image: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  previewWidth: PropTypes.number,
  previewHeight: PropTypes.number,
};

export default ImageUploadCell;
