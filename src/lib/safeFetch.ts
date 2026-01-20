// src/lib/safeFetch.ts
export async function safeFetch(url: string): Promise<any[]> {
    try {
        console.log('[safeFetch] Fetching:', url);
        const res = await fetch(url, { headers: { 'Accept': 'application/json' } });
        if (!res.ok) {
            console.error('[safeFetch] API error: ' + res.status);
            return [];
        }
        const ct = res.headers.get('content-type') || '';
        if (!ct.includes('application/json')) {
            console.error('[safeFetch] Not JSON: ' + ct);
            return [];
        }
        const data = await res.json();
        return data.data || [];
    } catch (e) {
        console.error('[safeFetch] Fetch failed:', e);
        return [];
    }
}