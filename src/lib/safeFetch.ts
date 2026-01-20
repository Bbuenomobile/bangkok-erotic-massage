// src/lib/safeFetch.ts
import { getMockListingsForCategory } from './mockData';

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
            console.error('[safeFetch] API error: ' + res.status + ', falling back to mock data');
            // Extract category and limit from URL for mock data
            const urlObj = new URL(url);
            const category = urlObj.searchParams.get('category') || 'erotic-massage';
            const limit = parseInt(urlObj.searchParams.get('limit') || '50');
            return getMockListingsForCategory(category, limit);
        }
        const ct = res.headers.get('content-type') || '';
        if (!ct.includes('application/json')) {
            console.error('[safeFetch] Not JSON: ' + ct + ', falling back to mock data');
            const urlObj = new URL(url);
            const category = urlObj.searchParams.get('category') || 'erotic-massage';
            const limit = parseInt(urlObj.searchParams.get('limit') || '50');
            return getMockListingsForCategory(category, limit);
        }
        const data = await res.json();
        return data.data || [];
    } catch (e) {
        console.error('[safeFetch] Fetch failed:', e, ', falling back to mock data');
        // Extract category and limit from URL for mock data
        try {
            const urlObj = new URL(url);
            const category = urlObj.searchParams.get('category') || 'erotic-massage';
            const limit = parseInt(urlObj.searchParams.get('limit') || '50');
            return getMockListingsForCategory(category, limit);
        } catch (urlError) {
            console.error('[safeFetch] URL parsing failed:', urlError);
            return getMockListingsForCategory('erotic-massage', 50);
        }
    }
}