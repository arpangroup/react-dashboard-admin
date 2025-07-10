
const Badge = ({ value, style = null }) => {
  if (value === null || value === undefined) return null;

  // Normalize value to string for comparison
  let normalizedValue = '';

  if (typeof value === 'boolean') {
    normalizedValue = value ? 'true' : 'false';
  } else if (typeof value === 'string') {
    normalizedValue = value.toLowerCase();
  } else {
    // For any other type, convert to string and lowercase
    normalizedValue = String(value).toLowerCase();
  }

  let badgeType = '';
  switch (normalizedValue) {
    case 'pending':
    case 'unverified':
    case 'no':
    case 'open':
      badgeType = 'pending';
      break;
    case 'verified':
    case 'success':
    case 'active':
    case 'yes':
    case 'completed':
    case 'crypto':
    case 'cilver':
    case 'premium':
    case 'true':
      badgeType = 'success';
      break;
    case 'deactivated':
    case 'inactive':
    case 'cancelled':
    case 'false':
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
      {String(value)}
    </div>
  );
};

export default Badge;