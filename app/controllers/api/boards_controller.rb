class Api::BoardsController < ApplicationController
    require 'open-uri'

    def index
        @boards = @boards || current_user.boards
        render :index
    end

    def show
        @board = Board.find_by(id: params[:id])
        render :show
    end

    def create
        if board_params['photo'].empty?
            @board = Board.new()
            @board.title = board_params['title']
            # if I want to by default set a background image
            # file = open('https://trallo-dev.s3-us-west-1.amazonaws.com/board.jpg')
            # debugger
            # @board.photo.attach(io: file, filename: 'board.jpg')
        else
            @board = Board.new(board_params)
        end
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
        params.require(:board).permit(:title, :photo)
    end

end
