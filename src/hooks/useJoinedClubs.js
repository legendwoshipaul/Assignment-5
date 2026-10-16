import { useState, useEffect, useCallback } from 'react'

const STORAGE_KEY = 'campus-club-finder:joined'

function readStored() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    const parsed = raw ? JSON.parse(raw) : []
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export default function useJoinedClubs() {
  const [joinedIds, setJoinedIds] = useState(readStored)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(joinedIds))
    } catch {
      /* storage unavailable: keep in-memory state only */
    }
  }, [joinedIds])

  const isJoined = useCallback((id) => joinedIds.includes(id), [joinedIds])

  const joinClub = useCallback((id) => {
    setJoinedIds((prev) => (prev.includes(id) ? prev : [...prev, id]))
  }, [])

  return { joinedIds, isJoined, joinClub }
}
