cmd_Release/buffertools.node := c++ -bundle -undefined dynamic_lookup -Wl,-search_paths_first -mmacosx-version-min=10.5 -arch x86_64 -L./Release  -o Release/buffertools.node Release/obj.target/buffertools/buffertools.o 