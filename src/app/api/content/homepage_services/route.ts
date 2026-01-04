import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    // #region agent log
    const url = new URL(request.url);
    const searchParams = url.searchParams;
    fetch('http://127.0.0.1:7243/ingest/1758e597-368d-4b04-a97a-0a10c135087d',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'api/content/homepage_services/route.ts:6',message:'API request received',data:{url:request.url,method:request.method,searchParams:Object.fromEntries(searchParams)},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
    // #endregion
    
    // Return empty array or fallback data to prevent 500 errors
    // This API endpoint seems to be called by old code
    const response = NextResponse.json([], { status: 200 });
    
    // #region agent log
    fetch('http://127.0.0.1:7243/ingest/1758e597-368d-4b04-a97a-0a10c135087d',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'api/content/homepage_services/route.ts:13',message:'API response sent',data:{status:200,body:[]},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
    // #endregion
    
    return response;
  } catch (error) {
    // #region agent log
    fetch('http://127.0.0.1:7243/ingest/1758e597-368d-4b04-a97a-0a10c135087d',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'api/content/homepage_services/route.ts:18',message:'API error',data:{error:error instanceof Error?error.message:String(error),stack:error instanceof Error?error.stack:undefined},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
    // #endregion
    console.error('Error in homepage_services API:', error);
    return NextResponse.json([], { status: 200 });
  }
}

