interface HeaderedFetch {
    fetch(url: string, query: any, body: any): Promise<Response>;
}

export default HeaderedFetch;