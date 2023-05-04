import { User } from 'firebase/auth'
import { create } from 'zustand'

interface State {
  userId: string | undefined
  updateUser: (userId: string | undefined) => Promise<void>
}

export const useUserStore = create<State>((set, get) => {
  return {
    userId: undefined,

    updateUser: async (userId: string | undefined) => {
      set({ userId })
    },
  }
})
