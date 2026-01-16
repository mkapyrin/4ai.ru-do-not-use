import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    // Return empty array or fallback data to prevent 500 errors
    // This API endpoint seems to be called by old code
    return NextResponse.json([], { status: 200 });
  } catch (error) {
    console.error('Error in homepage_services API:', error);
    return NextResponse.json([], { status: 200 });
  }
}

