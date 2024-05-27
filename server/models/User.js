import mongoose from "mongoose";
import express from "express";

const UserSchema = new mongoose.Scehma(
  {
    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 15,
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
      max: 15,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      max: 5,
    },
    picturePath: {
      type: String,
      default: "",
    },
    friends: {
      type: String,
      default: [],
    },
    location: String,
    occupation: String,
    viewedProfile: Number,
    impressions: Number,
  },
  { timestamps: true }
);
