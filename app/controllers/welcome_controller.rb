# encoding: utf-8

class WelcomeController < ApplicationController

	@@title = '纳芙贝吉'

  def show
  	require 'date'
  	
  	@title = @@title + ' - 公司首页'

  end

  def about_us
  	@title = @@title + ' - 关于我们'
  end

  def products
  	@title = @@title + ' - 产品列表'
    if params[:category] == 'wedding'
      render 'products_wedding'
    elsif params[:category] == 'present'
      render 'products_present'
    elsif params[:category] == 'lady'
      render 'products_lady'
    else   
      render 'products'
    end
  end
end