export default function ResultViewer({ data, status }) {
    if (status === 'loading') return <p>Loading...</p>
    if (!data) return <p>No data</p>
  
    return <pre>{JSON.stringify(data, null, 2)}</pre>
  }