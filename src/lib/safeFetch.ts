// src/lib/safeFetch.ts
export async function safeFetch(url: string): Promise<any[]> {
    try {
        console.log('[safeFetch] Fetching:', url);
        const res = await fetch(url, {
            headers: {
                'Accept': 'application/json',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                'Accept-Language': 'en-US,en;q=0.9',
                'Accept-Encoding': 'gzip, deflate, br',
                'DNT': '1',
                'Connection': 'keep-alive',
                'Upgrade-Insecure-Requests': '1',
                'Sec-Fetch-Dest': 'document',
                'Sec-Fetch-Mode': 'navigate',
                'Sec-Fetch-Site': 'none',
                'Sec-Fetch-User': '?1',
                'Cache-Control': 'max-age=0'
            }
        });
        if (!res.ok) {
            console.error('[safeFetch] API error:', res.status, res.statusText);
            return [];
        }
        const ct = res.headers.get('content-type') || '';
        if (!ct.includes('application/json')) {
            console.error('[safeFetch] Not JSON:', ct);
            return [];
        }
        const data = await res.json();
        console.log('[safeFetch] Success! Retrieved', data.data?.length || 0, 'listings');
        return data.data || [];
    } catch (e) {
        console.error('[safeFetch] Fetch failed:', e);
        return [];
    }
}