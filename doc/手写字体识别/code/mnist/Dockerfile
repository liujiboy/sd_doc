FROM liujiboy/ai
RUN mkdir -p /root/.keras/datasets
COPY ./datasets/mnist.npz /root/.keras/datasets/
RUN mkdir -p /ipython
COPY ./ipython/mnist.ipynb /ipython
COPY ./ipython/scipy /ipython
COPY ./ipython/mnist /ipython/mnist