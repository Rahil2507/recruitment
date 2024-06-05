import { JobField, StatusType, UserRole } from "@prisma/client"
import * as z from "zod"


export interface UserLogged {
  id ?: string
  name ?: string,
  email ?: string;
  role ?: UserRole
  error ?: string
  image ?: string
}

export const JobSchema = z.object({
  title: z.string().min(1, {
    message: 'Title is required'
  }),
  // field: z.string().min(1, {
  //   message: 'Title is required'
  // }),
  field: z.enum([ JobField.OTHER, JobField.TECH, JobField.FINANCE, JobField.MARKETING, JobField.SALES, JobField.MANAGEMENT, JobField.MEDIA, JobField.LAW, JobField.ENGINEERING, JobField.BUSINESS, JobField.HR, JobField.OPERATIONS, JobField.DESIGN, JobField.WRITING, JobField.EDITING, JobField.TEACHING, JobField.HEALTHCARE, JobField.ARCHITECTURE, JobField.HOSPITALITY, JobField.SPORTS, JobField.NONPROFIT,
  ], {
    errorMap: () => ({message: "Please select a field."})
  }),
  experience: z.string().min(1, {
    message: 'Experience is required'
  }),
  designation: z.string().min(1, {
    message: 'Designation is required'
  }),
  qualifications: z.string().min(1, {
    message: 'Qualifications is required'
  }),
  skills: z.string().min(1, {
    message: 'Skills is required'
  }),
  location: z.string().min(1, {
    message: 'Location is required'
  }),
  description: z.string().min(1, {
    message: 'Description is required'
  }),
  // status : z.enum([StatusType.ACTIVE, StatusType.DELETED]),
})


export const UserSchema = z.object({
  id: z.string(),
  email: z.string(),
  createdAt: z.date(),
  name: z.string(),
  role: z.enum([UserRole.OWNER, UserRole.EMPLOYER]),
  // status : z.enum([StatusType.ACTIVE, StatusType.DELETED]),
})


export const ApplicationSchema = z.object({
  name: z.string().min(1, {
    message: 'name is required'
  }),
  email: z.string().email({
    message: "Email is required"
  }),
  phone: z.string().min(1, {
    message: 'Phone No. is required'
  }),
  resume: z.string().min(1, {
    message: 'Resume is required'
  }),
  linkedin: z.string().min(1, {
    message: 'Linkedin URL is required'
  }),
  // status : z.enum([StatusType.ACTIVE, StatusType.DELETED]),
})


export const ContactSchema = z.object({
  name: z.string().min(1, {
    message: 'Name is required'
  }),
  email: z.string().email({
    message: "Email is required"
  }),
  // phone: z.optional(z.string()),
  phone: z.string().min(0, {
    message: 'Phone is required'
  }),
  message: z.string().min(1, {
    message: 'Message is required'
  }),
  // status : z.enum([StatusType.ACTIVE, StatusType.DELETED]),
})


export const SettingsSchema = z.object({    // Extra
  name: z.optional(z.string()),
  isTwoFactorEnabled: z.optional(z.boolean()),
  role: z.enum([UserRole.OWNER, UserRole.EMPLOYER]),
  email: z.optional(z.string().email()),
  password: z.optional(z.string().min(6)),
  newPassword: z.optional(z.string().min(6)),
})
  .refine((data) => {
    if (data.password && !data.newPassword) return false;
    return true
  }, {
    message: "New Password is required",
    path: ["newPassword"]
  })
  .refine((data) => {
    if (!data.password && data.newPassword) return false;
    return true
  }, {
    message: "Password is required",
    path: ["password"]
  })


export const ResetSchema = z.object({
  email: z.string().email({
    message: "Email is required"
  }),  
})


export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required"
  }),
  password: z.string().min(1, {
    message: 'Password is required'
  })
})


export const RegisterSchema = z.object({
  name: z.string().min(1, {
    message: 'Name is required'
  }),
  email: z.string().email({
    message: "Email is required"
  }),
  password: z.string().min(6, {
    message: 'Minimum 6 characters required'
  }),
  confirmPassword: z.string(),
  code: z.optional(z.string()),
})
.refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});
