
export async function GET(request: Request) {
    const res = await fetch('https://dev.obtenmas.com/catom/api/challenge/banks', {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      
      const data = await res.json()
     
      return Response.json(data)
}