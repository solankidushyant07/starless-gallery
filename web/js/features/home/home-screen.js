(function(G){
  const svg={
    search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    settings:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/></svg>',
    media:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    heart:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>',
    archive:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    trash:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    folder:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    camera:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="13" r="3"/></svg>',
    screenshots:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    downloads:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    travel:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    chevron:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><path d="M9 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    play:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><polygon points="5 3 19 12 5 21 5 3"/></svg>',
    close:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><path d="M6 18L18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round"/></svg>'
  };
  function icon(name){return svg[name]||'';}
  function getGreetingPeriod(){
    const hour=new Date().getHours();
    if(hour<12) return 'Morning';
    if(hour<18) return 'Afternoon';
    return 'Evening';
  }
  function folderIcon(name){
    const key=String(name||'').toLowerCase();
    if(key.includes('camera')||key.includes('dcim')) return 'camera';
    if(key.includes('screen')) return 'screenshots';
    if(key.includes('download')) return 'downloads';
    if(key.includes('travel')||key.includes('trip')) return 'travel';
    return 'folder';
  }
  function folderCover(folderId,media){
    return G.CoverPolicy?.folder(folderId,media)||null;
  }
  function formatDuration(value){
    if(typeof value==='string'&&value.trim()) return value.trim();
    const secs=Number(value);
    if(!Number.isFinite(secs)||secs<=0) return '';
    const m=Math.floor(secs/60);
    const s=Math.floor(secs%60);
    return `${m}:${String(s).padStart(2,'0')}`;
  }
  function quickCard(route,iconName,title,count,tone){
    return `<button class="home-quick-card ${tone||''}" data-home-nav="${route}">
      <span class="quick-icon">${icon(iconName)}</span>
      <span class="quick-copy"><strong>${G.escape(title)}</strong><small>${G.escape(String(count))}</small></span>
      <span class="quick-chevron">${icon('chevron')}</span>
    </button>`;
  }
  G.HomeScreen={
    async render(el){
      const media=await G.services.media.listWithImports({});
      const liveMedia=media.filter(x=>!x.trashed);
      const folders=window.GalleryManagerSample.folders||[];
      const favoriteCount=liveMedia.filter(x=>x.favorite).length;
      const trashCount=(await G.services.media.list({includeTrash:true})).filter(x=>x.trashed).length;
      const period=getGreetingPeriod();
      const archivedCount=G.services.archive? (await G.services.archive.listMedia()).length : 0;
      const pinnedSet=G.appState.pinnedFolderIds||new Set();
      const pinnedBase=pinnedSet.size?folders.filter(f=>pinnedSet.has(String(f.id))):folders.slice(0,8);
      const pinnedFolders=pinnedBase.slice(0,8).map(folder=>{
        const count=liveMedia.filter(m=>String(m.folderId||m.folder||'')===String(folder.id)).length;
        return {...folder,count,cover:folderCover(folder.id,media)};
      });
      const recent=[...liveMedia].sort((a,b)=>new Date(b.date)-new Date(a.date)).slice(0,8);
      el.innerHTML=`
        <div class="home-page">
          <div class="home-ambient" aria-hidden="true">
            <div class="home-orbital-ring ring-1"></div>
            <div class="home-orbital-ring ring-2"></div>
            <div class="home-orbital-ring ring-3"></div>
            <div class="home-star-dot dot-1"></div>
            <div class="home-star-dot dot-2"></div>
          </div>
          <section class="home-hero">
            <div class="home-greeting">
              <h1>Good<span class="home-greeting-period">${period}</span></h1>
              <p>Your memories, always with you.</p>
            </div>
            <button class="home-settings" data-home-nav="settings" aria-label="Settings">${icon('settings')}</button>
          </section>
          <label class="home-search" aria-label="Search photos, folders and albums">
            <span class="home-search-icon">${icon('search')}</span>
            <input id="home-search-input" type="search" placeholder="Search photos, albums..." autocomplete="off">
            <button id="home-search-clear" class="hidden" type="button" aria-label="Clear search">${icon('close')}</button>
          </label>
          <section class="home-quick-grid" aria-label="Quick access">
            ${quickCard('all-media','media','All Media',liveMedia.length,'all-media')}
            ${quickCard('favorites','heart','Favorites',favoriteCount,'favorites')}
            ${quickCard('archive','archive','Archive',archivedCount,'archive')}
            ${quickCard('trash','trash','Trash',trashCount,'trash')}
          </section>
          <section class="home-section">
            <div class="home-section-head">
              <div class="home-section-title">
                <span class="home-section-bar" aria-hidden="true"></span>
                <h2>Pinned Folders</h2>
              </div>
              <button class="home-see-all" data-home-nav="browse">See all ${icon('chevron')}</button>
            </div>
            <div class="home-horizontal home-folder-scroller" aria-label="Pinned folders">
              ${pinnedFolders.map(folder=>`
                <button class="home-folder-card" data-folder-id="${G.escape(folder.id)}">
                  <span class="home-folder-image">${folder.cover
                    ? `<img src="${G.escape(folder.cover.uri)}" alt="${G.escape(folder.name)}" loading="lazy">`
                    : `<span class="home-folder-placeholder">${icon('folder')}</span>`}</span>
                  <span class="home-folder-scrim" aria-hidden="true"></span>
                  <span class="home-folder-meta">
                    <span class="home-folder-icon">${icon(folderIcon(folder.name))}</span>
                    <span class="home-folder-name">${G.escape(folder.name)}</span>
                    <span class="home-folder-count">${G.escape(String(folder.count))}</span>
                  </span>
                </button>`).join('')}
            </div>
          </section>
          <section class="home-section home-recent-section">
            <div class="home-section-head">
              <div class="home-section-title">
                <span class="home-section-bar" aria-hidden="true"></span>
                <h2>Recent Media</h2>
              </div>
              <button class="home-see-all" data-home-nav="recent">See all ${icon('chevron')}</button>
            </div>
            <div class="home-recent-grid" aria-label="Recent media">
              ${recent.map(item=>{
                const dur=item.type==='video'?formatDuration(item.duration):'';
                return `<button class="home-recent-card" data-media-id="${G.escape(item.id)}" aria-label="${G.escape(item.name)}">
                  <img src="${G.escape(item.uri)}" alt="${G.escape(item.name)}" loading="lazy">
                  ${item.type==='video'?`<span class="home-video-badge">${icon('play')}${dur?`<span>${G.escape(dur)}</span>`:''}</span>`:''}
                  ${item.favorite?`<span class="home-favorite-badge">${icon('heart')}</span>`:''}
                </button>`;
              }).join('')}
            </div>
          </section>
        </div>`;
      el.querySelectorAll('[data-home-nav]').forEach(button=>{
        button.onclick=()=>{
          const route=button.dataset.homeNav;
          if(route==='archive') G.router.go('archive',{view:'albums'});
          else if(route==='browse') G.router.go('pinned-folders',{_nav:'home'});
          else if(route==='all-media') G.router.go('all-media',{_nav:'home'});
          else G.router.go(route);
        };
      });
      el.querySelectorAll('[data-folder-id]').forEach(button=>button.onclick=()=>G.router.go('folder',{id:button.dataset.folderId}));
      el.querySelectorAll('[data-media-id]').forEach(button=>button.onclick=()=>G.router.go('viewer',{id:button.dataset.mediaId}));
      const input=el.querySelector('#home-search-input'),clear=el.querySelector('#home-search-clear');
      input?.addEventListener('input',()=>clear?.classList.toggle('hidden',!input.value));
      input?.addEventListener('keydown',event=>{
        if(event.key==='Enter'&&input.value.trim()) G.router.go('search',{q:input.value.trim()});
      });
      clear?.addEventListener('click',()=>{input.value='';clear.classList.add('hidden');input.focus();});
    }
  };
})(window.GalleryManager=window.GalleryManager||{});
