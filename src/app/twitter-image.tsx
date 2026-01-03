import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Prop Trading Assistant - Real-Time Compliance Monitoring';
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '80px',
                    position: 'relative',
                }}
            >
                {/* Background dots pattern */}
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.08) 1.5px, transparent 1.5px)',
                        backgroundSize: '30px 30px',
                    }}
                />
                
                {/* Content */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        zIndex: 10,
                    }}
                >
                    {/* Badge */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '8px 24px',
                            background: 'linear-gradient(to right, #c084fc, #f472b6)',
                            borderRadius: '999px',
                            fontSize: '20px',
                            fontWeight: 600,
                            color: '#0a0a0a',
                            marginBottom: '40px',
                        }}
                    >
                        ✨ Trusted by 500+ Prop Traders
                    </div>

                    {/* Main Title */}
                    <h1
                        style={{
                            fontSize: '72px',
                            fontWeight: 600,
                            color: 'white',
                            lineHeight: 1.1,
                            marginBottom: '32px',
                            maxWidth: '900px',
                        }}
                    >
                        Pass Your Prop Firm Challenge with{' '}
                        <span style={{ color: '#a3e635' }}>Confidence</span>
                    </h1>

                    {/* Description */}
                    <p
                        style={{
                            fontSize: '28px',
                            color: 'rgba(255, 255, 255, 0.7)',
                            lineHeight: 1.5,
                            maxWidth: '800px',
                        }}
                    >
                        Real-time compliance monitoring that alerts you before breaking any rules
                    </p>

                    {/* Feature Pills */}
                    <div
                        style={{
                            display: 'flex',
                            gap: '16px',
                            marginTop: '48px',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                        }}
                    >
                        {['Daily Loss Alerts', 'Max Drawdown', 'Time Tracking'].map((feature) => (
                            <div
                                key={feature}
                                style={{
                                    display: 'flex',
                                    padding: '12px 24px',
                                    background: 'rgba(255, 255, 255, 0.1)',
                                    borderRadius: '12px',
                                    fontSize: '20px',
                                    color: 'white',
                                    border: '1px solid rgba(255, 255, 255, 0.2)',
                                }}
                            >
                                {feature}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
