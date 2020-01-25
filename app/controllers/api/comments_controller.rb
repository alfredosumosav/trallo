class Api::CommentsController < ApplicationController
    def index
        # debugger
        # @board = Board.find(params[:boardId])
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

    # def update
    #     @card = Card.find_by(id: params[:card][:id])
        # @card.title = params[:card][:title]
        # @card.description = params[:card][:description]
        # @card.due_date = params[:card][:due_date]
        # @card.list_id = params[:card][:list_id]

    #     if @card.update(card_params)
    #         render :show
    #     else
    #         render json: @card.errors.full_messages, status: 404
    #     end
    # end

    # def destroy
    #     @card = Card.find_by(id: params[:id])

    #     if @card.destroy
    #         render :show
    #     else
    #         render json: { message: 'Could not be deleted' }, status: 404
    #     end
    # end

    private

    def comment_params
        params.require(:comment).permit(:body, :card_id)
    end
end
