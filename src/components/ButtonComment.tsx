import React from 'react';

type ButtonCommentProps = {
    onClick: () => void;
};

const ButtonComment: React.FC<ButtonCommentProps> = ({ onClick }) => {
    return (
        <button onClick={onClick} className="flex items-center space-x-2">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#603F26"
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                />
            </svg>
            <span>Komentar</span>
        </button>
    );
};

export default ButtonComment;
