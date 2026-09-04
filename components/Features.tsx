export default function Features() {
    return (
      <section className="bg-[#0F3D3E] py-14">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-10 text-center text-white md:grid-cols-3">
  
          <div>
            <div className="mb-4 flex justify-center">
              <svg
                width="38"
                height="38"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#D4AF37"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 21h18" />
                <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" />
                <path d="M9 7h2" />
                <path d="M13 7h2" />
                <path d="M9 11h2" />
                <path d="M13 11h2" />
                <path d="M9 21v-4h6v4" />
              </svg>
            </div>
  
            <h3 className="text-xl font-medium">
              فنادق مختارة بعناية
            </h3>
  
            <p className="mt-2 text-white/70">
              نختر لك أفضل الخيارات
            </p>
          </div>
  
          <div>
            <div className="mb-4 flex justify-center">
              <svg
                width="38"
                height="38"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#D4AF37"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.5 13.5 13.5 20.5a2.1 2.1 0 0 1-3 0L3.5 13.5a2.1 2.1 0 0 1 0-3l7-7a2.1 2.1 0 0 1 3 0l7 7a2.1 2.1 0 0 1 0 3Z" />
                <circle cx="8.5" cy="8.5" r="1.2" />
              </svg>
            </div>
  
            <h3 className="text-xl font-medium">
              أفضل الأسعار
            </h3>
  
            <p className="mt-2 text-white/70">
              أسعار تنافسية وعروض خاصة
            </p>
          </div>
  
          <div>
            <div className="mb-4 flex justify-center">
              <svg
                width="38"
                height="38"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#D4AF37"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 13a8 8 0 0 1 16 0" />
                <path d="M4 13v2a2 2 0 0 0 2 2h1v-6H6a2 2 0 0 0-2 2Z" />
                <path d="M20 13v2a2 2 0 0 1-2 2h-1v-6h1a2 2 0 0 1 2 2Z" />
                <path d="M15 19h1a2 2 0 0 0 2-2" />
              </svg>
            </div>
  
            <h3 className="text-xl font-medium">
              دعم شخصي 24/7
            </h3>
  
            <p className="mt-2 text-white/70">
              فريقنا معك في كل خطوة
            </p>
          </div>
  
        </div>
      </section>
    );
  }