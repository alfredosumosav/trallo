class Api::CardsController < ApplicationController
    def index
        # debugger
        # @lists = @lists || List.all
        # @lists = List.in_board(params[board_id])
        @cards = Card.all.where(list_id: params[:listId])
        render :index
    end

    def create
        @card = Card.new(card_params)
        @card.author_id = current_user.id
        if @card.save
            render :show
        else
            render json: @list.errors.full_messages, status: 404
        end
    end

    def update
        @card = Card.find_by(id: params[:card][:id])
        # @card.title = params[:card][:title]
        # @card.description = params[:card][:description]
        # @card.due_date = params[:card][:due_date]
        # @card.list_id = params[:card][:list_id]

        if @card.update(card_params)
            render :show
        else
            render json: @list.errors.full_messages, status: 404
        end
    end

    def destroy
        @card = Card.find_by(id: params[:id])

        if @card.destroy
            render :show
        else
            render json: { message: 'Could not be deleted' }, status: 404
        end
    end

    private

    def card_params
        params.require(:card).permit(:title, :description, :due_date, :list_id)
    end
end
