class WelcomeController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
  end

  def articles
    @articles = Article.all

    render json: { data: @articles }
  end

  def create_article
    @article = Article.new(article_params)


    if @article.save
      @article.reload
      render json:  @article, status: 201
    else
      render json: { error: @article.errors.full_messages }, status: 422
    end
  end

private
  def article_params
    params.require(:article).permit(:title, :content)
  end
end
