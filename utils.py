import os
import shutil
path = '../../blog/src/blog/staticfiles/reactjs'
path_to = './reactx'
path_from = './build/static/'
# from time import sleep

if os.path.isdir(path_to) :
    if os.path.isdir(path_to+'/js') :
        shutil.rmtree(path_to+'/js')
        print('js folder deleted')
    if os.path.isdir(path_to+'/css') :
        shutil.rmtree(path_to+'/css')
        print('css folder deleted')
    # sleep(2)
    os.rmdir(path)
shutil.copytree(path_from,path_to)

i = 0
for file in os.listdir(path_to+'/js') :
    if file.endswith('.js') :
        i += 1
        os.rename(path_to+'/js/'+file,path_to+'/js/'+'react_js'+str(i)+'.js')
i = 0
for file in os.listdir(path_to+'/css') :
    if file.endswith('.css') :
        i += 1
        os.rename(path_to+'/css/'+file,path_to+'/css/'+'react_css'+str(i)+'.css')
