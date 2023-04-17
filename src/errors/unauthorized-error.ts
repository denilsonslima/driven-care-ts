import { ApplicationError } from "../protocols.js";

export function unathorizedError(message: string = "Invalid credentials"): ApplicationError {
  return {
    name: 'UnathorizedError',
    message,
  };
}