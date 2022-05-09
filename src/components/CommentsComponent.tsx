export const CommentComponent: any = ({data}: {data: string[]}) => {
    return (
        <div>
            {data.map((item) => (
                <div className="comment-wrapper">
                    <div className="comment-photo"></div>
                    <div className="comment-user">
                        <div>Name</div>
                        <div>Very important comment</div>
                    </div>
                </div>
            ))}
        </div>
    );
}