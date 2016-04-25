from django.http import HttpResponse
from django.shortcuts import render_to_response
from django.views.generic import ListView
from books.models import Book

# Create your views here.

def hello(request):
	return render_to_response('books/base.html',{})
	
class BookListView(ListView):

	model = Book
	template_name = 'books/book_list.html'

	def head(self,*args,**kwargs):
	    last_book = self.get_query().latest('publication_date')
	    response = HttpResponse('')
	    #RFC 1123 date format
	    response['Last-Modified'] = last_book.publication_date.strftime('%a,%d %b %Y %H:%M:%S GMT')
	    return response
