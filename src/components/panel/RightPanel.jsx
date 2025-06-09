import ReactDOM from 'react-dom';
import './RightPanel.css';

const RightPanel = ({ isOpen, onClose, children, style = null }) => {
    if (!isOpen) return null;

    return (
    <>
      {isOpen && <div className="backdrop" onClick={onClose} />}
      <div 
        className={`side-panel ${isOpen ? 'open' : ''}`} 
        style={{ width: '800px', ...style }}>
        <button className="close-btn" onClick={onClose}>×</button>    
        {children}
      </div>
    </>
  );
}

export default RightPanel;