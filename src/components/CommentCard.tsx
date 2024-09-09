import { Comment } from "@/type";

export default function CommentCard({ comment }: { comment: Comment }) {
    function getMinutesDifference(createdAt: Date) {
        const createdAtDate: Date = new Date(createdAt);
        const now: Date = new Date();

        const differenceInMs = now.getTime() - createdAtDate.getTime();
        const differenceInMinutes = Math.floor(differenceInMs / (1000 * 60));

        return differenceInMinutes;
    }

    const minutesDifference = getMinutesDifference(comment.createdAt);
    const hourDifference = Math.floor(minutesDifference / 60);

    return (
        <div className="flex items-center p-2 gap-2 flex-col sm:flex-row">
            <div className="w-16 h-16 flex-shrink-0 hidden md:block">
                <img
                    src={comment.imageUrl ? comment.imageUrl : `https://ui-avatars.com/api/?name=${comment.username}&background=random`}
                    alt="Recipe 1"
                    className="w-full h-full rounded-full object-cover"
                />
            </div>
            <div className="bg-gray-100 rounded-2xl w-full p-4 flex flex-col justify-start space-y-2">
                <div className="flex items-baseline justify-start space-x-2">
                    <b className="capitalize text-sm sm:text-base md:text-lg">
                        {comment.username}
                    </b>
                    <p className="text-xs">
                        {hourDifference > 0 ? `${hourDifference}h` : ''} {minutesDifference % 60}m
                    </p>
                </div>
                <div>
                    <p className="text-xs sm:text-sm md:text-base break-words w-full">
                        {comment.text}
                    </p>
                </div>
            </div>
        </div>
    );
}
