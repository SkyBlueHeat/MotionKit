/**
 * Validation utilities for render reliability
 */

export const validateChartData = (data: any[]): boolean => {
  if (!Array.isArray(data) || data.length === 0) {
    return false;
  }
  
  return data.every(item => 
    item && 
    typeof item.label === 'string' && 
    typeof item.value === 'number' && 
    !isNaN(item.value)
  );
};

export const validateNumber = (value: any, min?: number, max?: number): boolean => {
  if (typeof value !== 'number' || isNaN(value)) {
    return false;
  }
  
  if (min !== undefined && value < min) {
    return false;
  }
  
  if (max !== undefined && value > max) {
    return false;
  }
  
  return true;
};

export const validateString = (value: any, minLength?: number, maxLength?: number): boolean => {
  if (typeof value !== 'string') {
    return false;
  }
  
  if (minLength !== undefined && value.length < minLength) {
    return false;
  }
  
  if (maxLength !== undefined && value.length > maxLength) {
    return false;
  }
  
  return true;
};

export const clampValue = (value: number, min: number, max: number): number => {
  return Math.max(min, Math.min(max, value));
};

export const safeDivide = (numerator: number, denominator: number, fallback: number = 0): number => {
  if (denominator === 0 || isNaN(denominator)) {
    return fallback;
  }
  return numerator / denominator;
};
