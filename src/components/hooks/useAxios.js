import axios from 'axios'
import React, { useState } from 'react'



export const useAxios = () => {
      const [loading, setLoading] = useState(false)
      const [error, setError] = useState(null)
      const BASE_URL = "https://rickandmortyapi.com/api/"   
      
      const request = async ({ method = 'GET', url, data, params }) => {
            setLoading(true)
            return await axios({
                        method,
                        url: BASE_URL + url,
                        data,
                        params,
                  })
                  .then(res => {
                        setLoading(false)
                        return res.data
                  })
                  .catch(error => {
                        setLoading(false)
                        setError(error.message)
                        throw error
                  })
            }
            return {loading, request, error}
      }

