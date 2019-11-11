class Api::BoardsController < ApplicationController

    def index
        @boards = current_user.boards
        render :index
    end

    def show
        @board = Board.find_by(id: params[:id])
        render :show
    end

    def create
        @board = Board.new(board_params)
        @board.author_id = current_user.id
        if @board.save
            render :show
        else
            render json: @board.errors.full_messages, status: 404
        end
    end

    def update
        @board = Board.find_by(id: params[:id])
        if @board.update(board_params)
            render :show
        else
            render json: @board.errors.full_messages, status: 404
        end
    end

    def destroy
        @board = Board.find_by(id: params[:id])
        if @board.destroy
            render json: @board
        else
            render json: { message: 'Could not be deleted'}
        end
    end

    private
    
    def board_params
        params.require(:board).permit(:title)
    end

end
