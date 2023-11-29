'use client'

export default function ReloadButton() {
  return <button onClick={() => window.location.reload()} className=" p-3 rounded hover:bg-blue-700 active:bg-blue-900">Reload</button>
}
