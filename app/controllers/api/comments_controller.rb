class Api::CommentsController < ApplicationController
    def index
        @comments = Comment.all
        render :index
    end

    def create
        @comment = Comment.new(comment_params)
        @comment.author_id = current_user.id
        if @comment.save
            render :show
        else
            render json: @comment.errors.full_messages, status: 402
        end
    end

    # def show
    #     @card = Card.find(params[:id])
    #     render :show
    # end

    def update
        @comment = Comment.find_by(id: params[:comment][:id])
        @comment.body = params[:comment][:body]

        if @comment.update(comment_params)
            render :show
        else
            render json: @comment.errors.full_messages, status: 404
        end
    end

    def destroy
        @comment = Comment.find_by(id: params[:id])

        if @comment.destroy
            render :show
        else
            render json: { message: 'Could not be deleted' }, status: 404
        end
    end

    private

    def comment_params
        params.require(:comment).permit(:body, :card_id)
    end
end
