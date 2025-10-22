import { NextResponse } from 'next/server';

// This is a template for the API route - implementation for MailerLite integration
export async function POST(request: Request) {
  try {
    const { name, email, groupId } = await request.json();

    // Validate input
    if (!name || !email) {
      return NextResponse.json(
        { message: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Use environment variables for API key
    const apiKey = process.env.MAILERLITE_API_KEY;
    
    // Determine group ID based on the request or use default
    let targetGroupId;
    if (groupId === 'list-of-common-polyatomic-ions') {
      targetGroupId = process.env.MAILERLITE_GROUP_ID_LIST_OF_COMMON_POLYATOMIC_IONS;
    } else if (groupId === 'polyatomic-ions') {
      targetGroupId = process.env.MAILERLITE_GROUP_ID_POLYATOMIC_IONS;
    } else if (groupId === 'oxidation-numbers-in-transition-metals') {
      targetGroupId = process.env.MAILERLITE_GROUP_ID_OXIDATION_NUMBERS_IN_TRANSITION_METALS;
    } else if (groupId === 'jj-thomson-life-story') {
      targetGroupId = process.env.MAILERLITE_GROUP_ID_JJ_THOMSON_LIFE_STORY;
    } else {
      // Default to polyatomic ions group if no group specified
      targetGroupId = process.env.MAILERLITE_GROUP_ID_POLYATOMIC_IONS;
    }

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
        groups: targetGroupId ? [targetGroupId] : []
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