/**
 * Utility functions for API error handling
 */

/**
 * Extract error message from API response
 * @param {Object} error - Error object from API
 * @returns {String} Formatted error message
 */
export const getErrorMessage = (error) => {
  if (!error) return 'An unknown error occurred';
  
  // Handle network errors
  if (error.message === 'Failed to fetch') {
    return 'Network error. Please check your connection.';
  }
  
  // Handle standard API error responses
  if (error.data && error.data.message) {
    return error.data.message;
  }
  
  // Handle RTK Query errors
  if (error.error) {
    return error.error;
  }
  
  // Default error message
  return error.message || 'An error occurred. Please try again.';
};

/**
 * Handle API error in components
 * @param {Object} error - Error object
 * @param {Function} setError - State setter for error
 * @param {Function} setLoading - State setter for loading
 */
export const handleApiError = (error, setError, setLoading) => {
  if (setLoading) setLoading(false);
  const message = getErrorMessage(error);
  if (setError) setError(message);
  console.error('API Error:', error);
  return message;
};

/**
 * Safe access to nested object properties
 * @param {Object} obj - Object to access
 * @param {String} path - Path to property (e.g. 'data.user.name')
 * @param {*} defaultValue - Default value if property doesn't exist
 * @returns {*} Property value or default
 */
export const safeAccess = (obj, path, defaultValue = null) => {
  if (!obj || !path) return defaultValue;
  
  const keys = path.split('.');
  let result = obj;
  
  for (const key of keys) {
    if (result === null || result === undefined || !Object.prototype.hasOwnProperty.call(result, key)) {
      return defaultValue;
    }
    result = result[key];
  }
  
  return result === undefined ? defaultValue : result;
}; 