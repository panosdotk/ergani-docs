import React from 'react';
import Layout from '@theme/Layout';

export default function Home() {
    return (
        <Layout
            title="ERGANI II Documentation"
            description="Οδηγός τεκμηρίωσης για το ERGANI II"
        >
            <main style={{ padding: '3rem 1.5rem', maxWidth: '900px', margin: '0 auto' }}>
                <h1>ERGANI II Documentation</h1>
                <p>
                    Οδηγός για τις διαδικασίες ERGANI II,
                    την Ψηφιακή Κάρτα Εργασίας και το API.
                </p>
                <p>
                    <a href="/docs/ergani-ii/overview/">
                        Μετάβαση στην τεκμηρίωση →
                    </a>
                </p>
            </main>
        </Layout>
    );
}
