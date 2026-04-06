


export default function Logo() {

    return (
        <div className="flex items-center gap-2">

            {/* Icon */}
            <svg
                className="w-8 h-8 text-black dark:text-white"
                viewBox="0 0 40 40"
            >
                <path d="M20 5 L35 35 L5 35 Z" fill="currentColor" />
                <path d="M20 12 L30 32 L10 32 Z" fill="#3B82F6" />
            </svg>

            {/* Text */}
            <span className="text-xl font-semibold">
                <span className="text-black dark:text-white">
                    Vision
                </span>
                <span className="text-blue-600">
                    Edge
                </span>
            </span>

        </div>
    );
}