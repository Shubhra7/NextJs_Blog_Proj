export async function GET(request) {
  return new Response(JSON.stringify({ msg: 'todo kalu' }), {
    status: 202,
    headers: { 'Content-Type': 'application/json' },
  });
}
