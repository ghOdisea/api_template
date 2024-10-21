import { INTERNAL_SERVER_ERROR } from "../constants/http"
import appAssert from "../utils/appAssert"
import AppError from "../utils/AppError"
import catchErrors from "../utils/catchErrors"



export const GetHandler = catchErrors( async (_, res) => {
      res.json({
            message: 'Health check. Get works!'
      })
})

export const PostHandler = catchErrors(async (req, res) =>{
      const { data } = req.body

      if(!data) {
            throw new AppError(INTERNAL_SERVER_ERROR, 'Data is required')
      }

      const newMockData = {
            newData: data,
            createdAt: new Date()
      }

      res.json({
            message: "Health check. Post works!",
            body: newMockData
      })
})

export const PatchHandler = catchErrors(async (req, res) =>{
      const { data } = req.body

      if(!data) {
            throw new AppError(INTERNAL_SERVER_ERROR, 'Data is required')
      }

      const patchMockData = {
            patchedData: data,
            updatedAt: new Date()
      }

      res.json({
            message:'Health check. Patch works!',
            body: patchMockData
      })
})

export const DeleteHandler = catchErrors(async (req, res) => {
      const { data } = req.body

      if(!data) {
            throw new AppError(INTERNAL_SERVER_ERROR, 'Data is required')
      }

      const deleteMockData = {
            deletedData: data,
            deletedAt: new Date()
      }
      res.json({
            message:'Health check. Delete works!',
            body: deleteMockData
      })
})