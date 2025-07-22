// 请求
import {
    getRepo,
    getRepoList
} from '../api/repo';
import {
    create
} from 'zustand'

export const useReposStore = create((set) => ({
    repos: [],
    loading: false,
    error: null,
    fetchRepos: async () => {
        // 业务
        set({loading: true ,error: null});
        try {
            const res = await getRepoList('shunwuyu')
            set({repos: res.data,loading: false})
        } catch (error) {
            set({error: error.message,loading: false})
        } 
    }
}))