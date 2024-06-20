
export async function GET(request: Request) {
    const res = await fetch(`${process.env.API_URL}/banks`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      
      const data = await res.json()
     
      return Response.json(data)
}