import React, { useEffect, useRef, useState } from 'react'

export default function SearchBar() {
    const [query, setQuery] = useState("");

    // مرحله 2: متغیر برای نگه داشتن نتایج برگشتی از سرور
    const [results, setResults] = useState([]);
    const wrapperRef = useRef(null); // برای تشخیص کلیک بیرون

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
                setResults([]); // باکس را ببند
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);
    // مرحله 3: تابعی که هر بار input تغییر کرد اجرا می‌شود
    const handleSearch = async (e) => {
        const value = e.target.value;  // گرفتن مقدار تایپ شده
        setQuery(value);               // ذخیره مقدار داخل state

        // اگر کمتر از 2 حرف تایپ شد، نتایج را پاک می‌کنیم
        if (value.length < 2) {
            setResults([]);
            return;
        }
        //   setResults(res.data); // داده‌های JSON که از لاراول میاد

        try {
            // مرحله 4: فرستادن درخواست به لاراول
            const res = await axios.get(`http://127.0.0.1:8000/product/search?q=${encodeURIComponent(value)}`);
            setResults(res.data);
            console.log(res.data)
            // console.log(value)
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="relative" ref={wrapperRef}>
            <input type="text" placeholder="جستجوی محصولات..."
                className="bg-gray-500 text-white rounded-full py-2 px-4 pr-10 w-40 md:w-64 focus:outline-none focus:ring-2 focus:ring-primary"
                value={query}           // مقدار input از state گرفته می‌شود
                onChange={handleSearch} // هر بار تایپ اجرا می‌شود
            />
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi md:absolute md:block md:left-3 top-3 hidden bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
            {results.length > 0 && (
                <div className="absolute bg-white text-black w-full mt-2 rounded-lg shadow-lg max-h-60 overflow-y-auto z-50 border border-gray-300">
                    {results.map((item) => (
                        <a
                            key={item.id}
                            href={`/product/${item.id}`}
                            className="block px-4 py-2 bg-stone-900 text-white border-none text-lg  transition"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            )}
        </div>
    )
}
