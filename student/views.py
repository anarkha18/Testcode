from django.shortcuts import render, HttpResponse, redirect
from .models import *
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.http import HttpResponseRedirect

# Create your views here.

def home(request):
    return render(request, "home.html")
def studlog(request):
    return render(request, "studlog.html")
def adminlog(request):
    return render(request, "adminlog.html")
def register(request):
    return render(request, "register.html")
def handleLogin(request):
    if request.method=="POST":
        # Get the post parameters
        loginusername=request.POST['loginusername']
        loginpassword=request.POST['loginpassword']
        # print (loginusername)

        user=authenticate(username= loginusername, password= loginpassword)
        if user is not None:
            login(request, user)
            return render(request, "loggedstud.html")
        else:
            messages.error(request, "Invalid credentials! Please try again")
            return redirect("studlog")
    return HttpResponse("404- Not found")

def handleLogout(request):
    logout(request)
    messages.success(request, "Successfully logged out")
    return redirect('/')
# @login_required()
def loggedstud(request):
    return render(request, "loggedstud.html")
def handleSignup(request):
    if request.method=="POST":
        fname=request.POST['fname']
        lname=request.POST['lname']
        username =request.POST['username']
        phone =request.POST['phone']
        email =request.POST['email']
        password =request.POST['password']

        # Create the user
        myuser = User.objects.create_user(username=username, email=email, password=password, first_name=fname)
        myuser.last_name=lname
        myuser.save()

        info=userinfo.objects.create(user=myuser,phone=phone)
        messages.success(request, "Your Account has been successfully created")
        return redirect('register')
    else:
        return HttpResponse('404 - Not Found')

@login_required()
def edit(request):
# def update(request):
    if request.user.is_authenticated:
        if request.method=="POST":
            fname=request.POST['fname']
            lname=request.POST['lname']
            email =request.POST['email']
            phone=request.POST['phone']

            if len(fname)<2 or len(lname)<1 or len(email)<5 or len(phone)<5:
                messages.error(request, "Please fill the form correctly")
            else:
                User.objects.filter(id=request.user.id).update(first_name=fname,last_name=lname,email=email)
                userinfo.objects.filter(user__id=request.user.id).update(phone=phone)
                messages.success(request, "Your Profile has been successfully updated!!")
            return render(request, 'edit.html')
        return render(request, 'edit.html')
    else:
        return HttpResponse("Login Required !!!")
    return render(request, 'edit.html')

    
@login_required()
def dash(request):
    tables = User.objects.all()
    return render(request, "studdetails.html",{'key':tables})

def add(request):
    if request.method=="POST":
        fname=request.POST['fname']
        lname=request.POST['lname']
        username =request.POST['username']
        phone =request.POST['phone']
        email =request.POST['email']
        password =request.POST['password']

        # Create the user
        myuser = User.objects.create_user(username=username, email=email, password=password, first_name=fname)
        myuser.last_name=lname
        myuser.save()

        info=userinfo.objects.create(user=myuser,phone=phone)
        messages.success(request, "New student has been added")
        return redirect('/add')
    else:
       return render(request, "addstud.html")

@login_required()
def activestud(request):
    tables = User.objects.filter(is_active = True)
    return render(request, "active.html",{'key':tables})
@login_required()
def inactivestud(request):
    tables = User.objects.filter(is_active = False)
    return render(request, "inactive.html",{'key':tables})
    