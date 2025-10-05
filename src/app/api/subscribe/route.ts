import { NextResponse } from 'next/server';

// This is a template for the API route - implementation for MailerLite integration
export async function POST(request: Request) {
  try {
    const { name, email } = await request.json();

    // Validate input
    if (!name || !email) {
      return NextResponse.json(
        { message: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Use environment variables for API key and specific group ID
    const apiKey = process.env.MAILERLITE_API_KEY;
    const groupId = process.env.MAILERLITE_GROUP_ID_POLYATOMIC_IONS; // Specific group ID for polyatomic ions

    if (!apiKey) {
      console.error('MailerLite API key is not configured');
      return NextResponse.json(
        { message: 'Server configuration error' },
        { status: 500 }
      );
    }

    // MailerLite API integration
    const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        email,
        fields: {
          name: name
        },
        groups: groupId ? [groupId] : []
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('MailerLite API error:', data);
      return NextResponse.json(
        { message: 'Failed to subscribe. Please try again later.' },
        { status: response.status }
      );
    }

    // Send the worksheet or confirmation email here
    // MailerLite will handle this via automation

    return NextResponse.json({ 
      message: 'All sent! If you can\'t find it in your Inbox, check your Spam in case it\'s there.' 
    });
  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { message: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
}