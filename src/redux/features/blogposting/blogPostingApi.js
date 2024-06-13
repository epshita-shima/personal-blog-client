import { api } from "../../api/apiSlice";

const blogPostingApi=api.injectEndpoints({
    endpoints:(builder)=>({
        createBlog:builder.mutation({
            query:(payload)=>({
                url:'',
                method:"POST",
                body:payload
            })
        })
    })
})

export const {}=blogPostingApi