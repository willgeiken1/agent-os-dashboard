// Agent OS: retired offline shell (agent-os-v3). The new Agent Control app does not use a service worker.
// This version takes over from agent-os-v1 at once, deletes every old cache, unregisters itself,
// and reloads open tabs so phones that had the old app load the new one from the network.
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>{e.waitUntil((async()=>{
  const keys=await caches.keys();await Promise.all(keys.map(k=>caches.delete(k)));
  await self.clients.claim();await self.registration.unregister();
  const cs=await self.clients.matchAll({type:'window'});cs.forEach(c=>{try{c.navigate(c.url)}catch(_){}});
})())});
self.addEventListener('fetch',()=>{});
