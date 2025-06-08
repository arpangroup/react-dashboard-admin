
const Badge = ({ value, style = null }) => {  
    if (!value) return null;
    const normalizedValue = value.toLowerCase();

    let badgeType = '';
    switch (normalizedValue) {
      case 'pending':
      case 'unverified':
        badgeType = 'pending';
        break;
      case 'verified':
      case 'success':
      case 'active':
        badgeType = 'success';
        break;
      case 'deactivated':
      case 'inactive':
      case 'cancelled':
        badgeType = 'danger';
        break;
      default:
        badgeType = 'default';
        break;
    }

    const baseStyle = {}; // if you want default inline styles

    // Merge base styles with optional passed-in style
    const combinedStyle = style ? { ...baseStyle, ...style } : baseStyle;

    return (
      <div className={`site-badge ${badgeType}`} style={combinedStyle}>
        {value}
      </div>
    );
  };

  export default Badge;