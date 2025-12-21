import { useState, useCallback } from 'react'
import { ZodSchema, ZodError } from 'zod'

type FieldErrors<T> = {
  [K in keyof T]?: string[]
}

export function useFormValidation<T extends Record<string, unknown>>(schema: ZodSchema<T>) {
  const [errors, setErrors] = useState<FieldErrors<T>>({})
  const [touched, setTouched] = useState<Set<keyof T>>(new Set())

  const validateField = useCallback((name: keyof T, value: unknown) => {
    try {
      // Create a partial object with just this field
      const data = { [name]: value }

      // Try to parse just this field value
      schema.parse(data as T)

      // Clear error for this field
      setErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })

      return true
    } catch (error) {
      if (error instanceof ZodError) {
        const issues = error.issues
        const fieldError = issues.find(e => e.path[0] === name)
        if (fieldError) {
          setErrors(prev => ({
            ...prev,
            [name]: [fieldError.message]
          }))
        }
      }
      return false
    }
  }, [schema])

  const setFieldTouched = useCallback((name: keyof T) => {
    setTouched(prev => new Set(prev).add(name))
  }, [])

  const isFieldTouched = useCallback((name: keyof T) => {
    return touched.has(name)
  }, [touched])

  const clearErrors = useCallback(() => {
    setErrors({})
    setTouched(new Set())
  }, [])

  const getFieldError = useCallback((name: keyof T) => {
    return errors[name]?.[0]
  }, [errors])

  const hasFieldError = useCallback((name: keyof T) => {
    return !!errors[name]
  }, [errors])

  return {
    errors,
    touched,
    validateField,
    setFieldTouched,
    isFieldTouched,
    clearErrors,
    getFieldError,
    hasFieldError,
  }
}
