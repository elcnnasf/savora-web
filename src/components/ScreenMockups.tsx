import {
  Flame, Clock, Users, Sparkles, Camera, Calendar, ShoppingCart,
  Heart, ChevronRight, Search, SlidersHorizontal, Sun, UtensilsCrossed,
  Moon, Soup, LayoutGrid, Home, Compass, MessageCircle, Bookmark, User,
  X, Zap, Plus,
} from 'lucide-react';

/* Stylised recreations of the real Savora app screens (light theme, orange
   brand) so the phone frames mirror the actual product. Text is kept in
   English to match App-Store-style marketing screenshots. */

function BottomNav({ active }: { active: 'home' | 'discover' }) {
  const items = [
    { id: 'home', Icon: Home, label: 'Home' },
    { id: 'discover', Icon: Compass, label: 'Discover' },
    { id: 'chat', Icon: MessageCircle, label: 'AI Chat' },
    { id: 'saved', Icon: Bookmark, label: 'Saved' },
    { id: 'profile', Icon: User, label: 'Profile' },
  ];
  return (
    <div className="am-nav">
      {items.map((it) => (
        <div key={it.id} className={`am-nav-item ${it.id === active ? 'on' : ''}`}>
          <it.Icon size={15} strokeWidth={2} />
          <span>{it.label}</span>
        </div>
      ))}
    </div>
  );
}

export function HomeScreenMock() {
  const quick = [
    { Icon: Camera, label: 'Scan', sub: 'Ingredients', bg: '#16A34A' },
    { Icon: Sparkles, label: 'AI Recipe', sub: 'Just for you', bg: '#7C3AED' },
    { Icon: Calendar, label: 'Meal', sub: 'Planner', bg: '#F59E0B' },
    { Icon: ShoppingCart, label: 'Shopping', sub: 'List', bg: '#2563EB' },
  ];
  const cont = [
    { img: '/img/kebab.jpg', name: 'Lamb Kebab' },
    { img: '/img/plov.jpg', name: 'Plov' },
  ];

  return (
    <div className="appmock">
      <div className="am-status"><span>0:31</span><span className="am-dots"><i /><i /><i /></span></div>

      <div className="am-body">
        <div className="am-topbar">
          <div className="am-brand">
            <img src="/logo.png" alt="" />
            <span>savora</span>
          </div>
          <div className="am-avatar">S</div>
        </div>

        <p className="am-greet">Good evening, Savora 👋</p>
        <h4 className="am-cook">What would you like<br />to cook <span>today?</span></h4>

        <p className="am-label">Quick Actions</p>
        <div className="am-quick">
          {quick.map((q) => (
            <div className="am-tile" style={{ background: q.bg }} key={q.label}>
              <q.Icon size={15} strokeWidth={2.2} />
              <span className="am-tile-t">{q.label}</span>
              <span className="am-tile-s">{q.sub}</span>
            </div>
          ))}
        </div>

        <div className="am-rec-head">
          <div>
            <p className="am-rec-title">Today's Recommendation</p>
            <p className="am-rec-ai"><Sparkles size={9} /> AI picked just for you</p>
          </div>
          <span className="am-seeall">See All</span>
        </div>

        <div className="am-rec-card">
          <div className="am-rec-img" style={{ backgroundImage: 'url(/img/cake.jpg)' }} />
          <div className="am-rec-body">
            <div className="am-rec-row">
              <span className="am-tag">chocolate</span>
              <span className="am-heart"><Heart size={11} /></span>
            </div>
            <p className="am-rec-name">Chocolate Cake</p>
            <div className="am-rec-stats">
              <span><Flame size={10} /> 380</span>
              <span><Users size={10} /> 12g</span>
              <span><Clock size={10} /> 20m</span>
            </div>
            <div className="am-cook-btn">Start Cooking <ChevronRight size={12} /></div>
          </div>
        </div>

        <p className="am-label am-label-2">Continue where you left off</p>
        <div className="am-cont">
          {cont.map((c) => (
            <div className="am-cont-card" key={c.name}>
              <div className="am-cont-img" style={{ backgroundImage: `url(${c.img})` }}>
                <span className="am-new">New</span>
              </div>
              <p className="am-cont-name">{c.name}</p>
            </div>
          ))}
        </div>
      </div>

      <BottomNav active="home" />
    </div>
  );
}

export function ScanScreenMock() {
  const found = ['Tomato', 'Garlic', 'Onion', 'Pepper', 'Basil', 'Olive oil', 'Chicken'];

  return (
    <div className="appmock">
      <div className="am-status"><span>0:31</span><span className="am-dots"><i /><i /><i /></span></div>

      <div className="am-scan-head">
        <span className="am-scan-close"><X size={14} /></span>
        <span className="am-scan-title">Scan Ingredients</span>
        <span className="am-scan-flash"><Zap size={13} /></span>
      </div>

      <div className="am-scan-view">
        <div className="am-scan-frame">
          <span className="c tl" /><span className="c tr" />
          <span className="c bl" /><span className="c br" />
          <div className="am-scan-line" />
        </div>
        <p className="am-scan-hint">Point at your ingredients</p>
        <div className="am-scan-cam"><Camera size={18} /></div>
      </div>

      <div className="am-scan-sheet">
        <div className="am-scan-badge"><Sparkles size={10} /> 7 ingredients detected</div>
        <div className="am-chips">
          {found.map((f) => (
            <span className="am-chip" key={f}>{f} <X size={9} /></span>
          ))}
          <span className="am-chip am-chip-add"><Plus size={9} /> Add</span>
        </div>
        <div className="am-scan-cta">Find Recipes <ChevronRight size={13} /></div>
      </div>
    </div>
  );
}

export function DiscoverScreenMock() {
  const cats = [
    { Icon: LayoutGrid, label: 'All', on: true },
    { Icon: Sun, label: 'Breakfast' },
    { Icon: UtensilsCrossed, label: 'Lunch' },
    { Icon: Moon, label: 'Dinner' },
    { Icon: Soup, label: 'Soups' },
  ];
  const chips = ['high-protein', 'low-calorie', 'quick meals', 'chicken recipes'];
  const recs = [
    { img: '/img/cake.jpg', name: 'Chocolate Cake' },
    { img: '/img/kebab.jpg', name: 'Lamb Kebab' },
  ];

  return (
    <div className="appmock">
      <div className="am-status"><span>0:31</span><span className="am-dots"><i /><i /><i /></span></div>

      <div className="am-body">
        <h4 className="am-page-title">Discover</h4>

        <div className="am-search-row">
          <div className="am-search"><Search size={12} /> <span>Search recipes…</span></div>
          <div className="am-filter"><SlidersHorizontal size={14} /></div>
        </div>

        <div className="am-cats">
          {cats.map((c) => (
            <div className="am-cat" key={c.label}>
              <div className={`am-cat-circle ${c.on ? 'on' : ''}`}><c.Icon size={15} strokeWidth={2} /></div>
              <span className={c.on ? 'on' : ''}>{c.label}</span>
            </div>
          ))}
        </div>

        <div className="am-promo">
          <div className="am-promo-l">
            <span className="am-promo-ai">AI</span>
            <p className="am-promo-h">Can't find what you're looking for?</p>
            <p className="am-promo-s">Generate any recipe instantly with AI.</p>
            <div className="am-promo-btn">Generate with AI ✨</div>
          </div>
          <div className="am-promo-img" style={{ backgroundImage: 'url(/img/ricebowl.jpg)' }} />
        </div>

        <p className="am-label">Popular Searches</p>
        <div className="am-pop">
          {chips.map((c) => <span className="am-pop-chip" key={c}>↗ {c}</span>)}
        </div>

        <p className="am-label am-label-2">Recommended for You</p>
        <div className="am-cont">
          {recs.map((r) => (
            <div className="am-cont-card" key={r.name}>
              <div className="am-cont-img" style={{ backgroundImage: `url(${r.img})` }}>
                <span className="am-ai-badge">AI</span>
              </div>
              <p className="am-cont-name">{r.name}</p>
            </div>
          ))}
        </div>
      </div>

      <BottomNav active="discover" />
    </div>
  );
}
